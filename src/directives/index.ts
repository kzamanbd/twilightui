import vRipple from './ripple';

export default {
    install: (app: any) => {
        app.directive('ripple', vRipple);
    }
};
