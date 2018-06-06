let timer = require('../timeout')
var assert = require('assert');
var expect = require('chai').expect

describe('timerout', function() {
      it('should rject a promise with error "timed out"', async () => {
        try{
           const result = await timer.timeout(timer.sleep(50), 40);
           throw new Error('Incorrect result.');
        }
        catch (e) {
           expect(e).to.equal('timed out'); 
        }
      });

      it('should resolve a promise with undefined', async () => {
        const result = await timer.timeout(timer.sleep(50), 100);
        expect(result).to.equal(); 
      });
  });
