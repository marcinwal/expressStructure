describe('simple math',function(){
  it('should add simple integers',function(){
    var i1 = 1;
    var i2 = 2;
    var res = i1+i2;
    console.log(res);
   expect(res).toEqual(3);
  });
});
