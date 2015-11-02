# donejs-app

This is to demo https://github.com/canjs/can-fixture/issues/3:

After *can-fixture* gets imported, application does not load dynamically imported pages correctly anymore.

IF user goes to "Page Three" which imports can-fixture
AND user tries to go to "Page Two" 
THEN he sees "Loading..." and "Page Two" is not loaded correctly.

In network you can see "/src/page2/page2.js" being fetched, but neither are "page2.stache" nor "page2.less".

This problem doesn't exist if in [line 241](https://github.com/canjs/can-fixture/blob/b631194d2f40eab3b617f9c654cd6d4cbec19dd7/fixture.js#L241) item "onreadystatechange" is removed.
