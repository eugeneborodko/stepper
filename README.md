# Stepper

[Demo](https://6300cc2965067935d3f69d45--dashing-dolphin-ded665.netlify.app/)

## Details I was focused on

1. Input data should be saved while moving to the previous and next steps if the data was populated.
2. The navigation among the steps should also work while using browser controls. In the meantime, it's not allowed to display the steps in the url so as not to let other users move to the needed step by a direct link.
3. After reloading the page, the user should get on the same step, while all the previously filled data should be saved.
4. While attempting to move to a different page and moving back, the data should be reset. Exactly the same behavior is expected when opening stepper wia a direct link in a new tab - the data should be cleared.
