package com.tindev;

import com.facebook.react.ReactActivity;
<<<<<<< HEAD
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
=======
>>>>>>> f3e1172eb80e0b9890e8c0cbffd68b68bf01df6e

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "tindev";
    }
<<<<<<< HEAD

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
            return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }
=======
>>>>>>> f3e1172eb80e0b9890e8c0cbffd68b68bf01df6e
}
