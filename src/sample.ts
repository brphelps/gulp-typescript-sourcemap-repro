namespace Something {
    angular.module("something", []).run(() => {
        console.log("doSomething");
    });

    export function doStuff($http: any): any {
        console.log("stuff");
    }

    export let directive = function ($http: any) {
        return {
            restrict: "A",
            link: function (scope: ng.IScope, element: ng.IAugmentedJQuery, attr: ng.IAttributes) {
                let a: string;
                let b: string;
                let appendHtml = (e: any, type: any, isErrorMessage?: boolean) => {
                    try {
                        if (e && e.detail && e.detail.targetId === undefined) {

                            a = e.detail.message;
                            b = undefined;
                            if (isErrorMessage) {
                                return;
                            }
                        }
                    } catch (e) {
                    }
                };
            }
        };
    };
}