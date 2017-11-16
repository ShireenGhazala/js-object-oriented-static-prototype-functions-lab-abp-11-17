function IcebreakerResponse(email){
  this.email = email
}

static IcebreakerResponse.BatchCreate = function(emails){
  return emails.map(function(mail){
    return new IceBreakerResponse(mail[i])
  })
}
