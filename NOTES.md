Please add any additional notes here…

due to time constraints TypeScript was left out as I am reasonably new to writing in TypeScript


First Branch - SETUP

- setup file structure:
  - did this straight away to keep code organised for the start and better dev experience
- setup express router:
  - I use this to clean up the index.ts, as well for maintainability as its easier to find what you need
- create custom error class:
  - I did this as I recently learn the advantages you get in consistency, as well as it being good dev experience to pass the status code directly in
  - I also included a check to make sure that the stack trace wasnt included in the error in 'production' environment for safety concerns. But I need to include the stack trace to help me debug issues, and if logging is implemented it will help the team.


second branch - get-all-cards-endpoint
- used TDD to build up endpoint, creating the data access layer to read the file, and the controller to handle logic to format that for presentation.
- I decided that if there was no cards, an empty array would be returned, as I think that if there if it is not broken then no error should be thrown. As well it will be easier for working on the frontend with a response like that rather than an error as you would only have to write code for one success scenario
- I used a hashmap to allow for a quick lookup to find the imageUrl, as through doing leetcode this is more performant than my other idea which was a Array.find method inside of a map, which in general a loop inside a loop is a bad idea when a data structure is available to use.
- I also unit tested my model functions in this case as It was a case where I could use unit testing to build functionality, and make sure its all working as it needs to.
- this branch I also implemented the global error handler to catch the errors thrown while reading files that may occur, as well as any freak errors such as network errors.
- does not make sense here to test if original array was edited as fs.WriteFile was not used.

third branch - get-card-by-id
 - for this endpoint im considering the use of caching, using a package called node-cache or making a simple in-memory cache.
   - as currently right now the data amount is small, a simple manual in memory caching will be efficient,
   - however if the data was expected to change volume frequently I wouldnt do this, but purely for this use case its suitable
   - as well its important to know that If the cards were to be updated it would be important for the cache to be invalidated too
   - I ended up with a method where if the id belongs in the cache that cards returned instantly and if not we read the file and find the card we want
 - An issue I was confused with here was where to place the code to find the card by id, usually the database would handle finding the card by id e.g SELECT card FROM table where id=$1; so here it seemed right to emulate that in the model and push that into the controller
 - Then error handling this the customError made it easy to check if it was an error I can predict or an unknown error by using the instanceof.
 - as we had a known format of the card id - I thought to implement express validator to protect the handlers from being hit if the card id is invalid. This way if an invalid format is input for the id then it quickly gets handled with an informative error message to the user. These validators were tested by sending tests to particular trigger them/not trigger them



If I had more time:
- Complete the other endpoints fully tested
- fill database with data given, implement ORM usage to allow for better app performance than reading file
- add dependency injection to improve testability of code
- consider other forms of performance boosting such as different more scalable caching or data compression
- I started to reduce the amount of TypeScript I used due to time constraints so I would refactor all missing types that are relevant.