# Newsroom TODO:

- [ ] Get tweet buttons working
  - Modal is interfering with tweet button display. Try:
  ```javascript
  $('#myModal').on('hidden.bs.modal', function (e) {
    twttr.widgets.load();
  });
  ```
  
  

