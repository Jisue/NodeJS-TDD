// test 코드
// node 기본 assert 사용

const utils = require('./utils');
const assert = require('assert');

describe('utils.js모듈의 capitialize() 함수는 ', () => {
    it('문자열의 첫번째 문자를 대문자로 변환한다', () => {
        const result = utils.capitialize('hello');
        assert.equal(result, 'Hello');
    })
})

// should 서드 파티 라이브러리
const should = require('should');

describe('utils.js모듈의 capitialize() 함수는 ', () => {
    it('문자열의 첫번째 문자를 대문자로 변환한다', () => {
        const result = utils.capitialize('hello');
        result.should.be.equal('Hello');
    })
})