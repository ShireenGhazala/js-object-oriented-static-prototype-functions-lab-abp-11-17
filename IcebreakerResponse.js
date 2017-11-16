function IcebreakerResponse(email){
  this.email = email
}

static IcebreakerResponse.BatchCreate = function(arr){
  return arr.map(function(mail){
    return new IceBreakerResponse (mail)
  })
} 