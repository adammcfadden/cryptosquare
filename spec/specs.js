describe('cryptograph', function(){

  it("will remove all whitespace, and punctuation in a string.", function(){
    expect(cryptograph("the dog's ball goes for a toss.")).to.equal("thedogsballgoesforatoss");
  });

  it("will downcase all words in the sentence", function() {
    expect(cryptograph("The Dog Is Good")).to.equal("thedogisgood")
  });
});
