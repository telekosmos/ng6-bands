'use strict';

// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-ui-router';
import 'angular-mocks';

/*
import AutocompleteModule from './autocomplete';
import AutocompleteController from './autocomplete.controller';
import AutocompleteComponent from './autocomplete.component';
import AutocompleteTemplate from './autocomplete.html!text';
*/
import AppModule from './app';
import AppServices from './app.services';

describe('AppUtil', ()=>{
  let mockState, mockRoutes, mockBackend, mockCache;
  let makeController, controller;
  let makeService, service;
  let mockBand = 'queen';
  
  beforeEach(angular.mock.module(AppModule.name));
  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.inject((_$state_, _ROUTES_, _$httpBackend_, _BandsCache_, util)=>{
    // $rootScope = _$rootScope_;
    mockState = _$state_;
    mockRoutes = _ROUTES_;
    mockBackend = _$httpBackend_;
    mockCache = _BandsCache_;

    mockBackend.whenJSONP(/.*/).respond({
        "batchcomplete": "",
        "query": {
          "pages": {
            "31056": {
              "pageid": 31056,
              "ns": 0,
              "title": "The Rolling Stones",
              "thumbnail": {
                "source": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Trs_20150623_milwaukee_jp_105.jpg",
                "width": 800,
                "height": 579
              },
              "pageimage": "Trs_20150623_milwaukee_jp_105.jpg",
              "contentmodel": "wikitext",
              "pagelanguage": "en",
              "pagelanguagehtmlcode": "en",
              "pagelanguagedir": "ltr",
              "touched": "2016-06-19T17:37:27Z",
              "lastrevid": 726048842,
              "length": 128498,
              "extract": "<p><b>The Rolling Stones</b> are an English rock band formed in London in 1962. The first settled line-up consisted of Brian Jones (guitar, harmonica), Ian Stewart (piano), Mick Jagger (lead vocals, harmonica), Keith Richards (guitar), Bill Wyman (bass) and Charlie Watts (drums). Stewart was removed from the official line-up in 1963 but continued as occasional pianist until his death in 1985. Jones departed the band less than a month prior to his death in 1969, having been replaced by Mick Taylor, who remained until 1975. Since then, Ronnie Wood has been on guitar in tandem with Richards. Following Wyman's departure in 1993, Darryl Jones has been the main bassist. Other notable keyboardists for the band have included Nicky Hopkins, active from 1967 to 1982; Billy Preston through the mid-1970s and Chuck Leavell, active since 1982. The band was first led by Jones but after teaming as the band's songwriters, Jagger and Richards assumed <i>de facto</i> leadership.</p>\n<p>The Rolling Stones were in the vanguard of the British Invasion of bands that became popular in the US in 1964\u201365, and are identified with the youthful and rebellious counterculture of the 1960s. After a short period of musical experimentation that culminated with the polarising and largely psychedelic album <i>Their Satanic Majesties Request</i> (1967), the group returned to its bluesy roots with <i>Beggars' Banquet</i> (1968) which\u2014along with its follow-ups, <i>Let It Bleed</i> (1969), <i>Sticky Fingers</i> (1971) and <i>Exile on Main St</i> (1972)\u2014is generally considered to be the band's best work.</p>\n<p>The band continued to release commercially successful records, including <i>Some Girls</i> (1978) and <i>Tattoo You</i> (1981). In the 1980s, a feud between Jagger and Richards about the band's musical direction almost caused the band to split but they managed to patch up their relationship and have a comeback with <i>Steel Wheels</i> (1989), which was followed by a commercially successful concert tour. Since the 1990s, new recorded material from the group has been less well-received and less frequent. Despite this, the Rolling Stones have continued to be big attraction on the live circuit, with record-setting stadium tours in the 1990s and 2000s. By 2007, the band had made what were then four of the top five highest-grossing concert tours of all time.</p>\n<p>The Rolling Stones were inducted into the US Rock and Roll Hall of Fame in 1989, and the UK Music Hall of Fame in 2004. <i>Rolling Stone</i> magazine ranked them fourth on the \"100 Greatest Artists of All Time\" list, and their estimated record sales are above 200 million. In 2008, the band ranked 10th on the <i>Billboard</i> Hot 100 All-Time Top Artists chart.</p>\n<p></p>"
            }
          }
        }
      });

    service = util;
  }));
  
  afterEach(function() {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });

  describe('Basic checks', function() {
    // test things about the component module
    // checking to see if it registers certain things and what not
    // test for best practices with naming too
    it ('should exist module and service', function() {
      expect(null).to.not.be.undefined;
      expect(AppModule).not.to.be.undefined;
      expect(AppModule.name).to.equal('app');

      expect(service).to.not.be.undefined;
      expect(service._ROUTES).to.not.be.undefined;
      expect(service._ROUTES.length).to.not.be.undefined;
      expect(service._cache).not.to.be.undefined;

      expect(mockState).not.to.be.undefined;
      expect(mockCache).not.to.be.undefined;
    });
   })
   
   describe('Service functionality', function() { 

    it('should get the full states list', function() {
      let states = service.getCompleteStates();
      expect(states).not.to.be.undefined;
      expect(states.length).not.to.be.defined;
      expect(states.length).to.be.gt(0);
      let checkStates = function(list) {
        return list.every(item => typeof item.url !== 'undefined' & item.url.length > 0)
      }
      expect(states).to.satisfy(checkStates);
    });


    it('should return an object from wikipedia', function() {
      const promise = service.getBandMedia(mockBand);
      expect(promise).to.eventually.be.fulfilled;
      expect(promise).to.eventually.be.an('object');
      const keys = ['img', 'ogTit', 'ogType', 'ogImg', 'ogUrl', 'metaKeys', 'metaDesc', 'pageTitle', 'youtube', 'text']
      expect(promise).to.eventually.include.keys(keys)
      expect(promise).to.eventually.have.property('ogTit', 'The Rolling Stones');

      mockBackend.flush();
    });

  });

});