import * as _ from 'underscore';
export class HelperFunction{

    static  applyMixins(derivedCtor: any, baseCtors: any[]) {
        baseCtors.forEach(baseCtor => {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
                Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
            });
        });
    }

    static loggerService(name: string, data?: any) {
        // if (!environment.production) {
            console.log("********************** " + name + " log starts **********************");
            if (_.isObject(data))
                console.log(JSON.stringify(data));
            else
                console.log(data);
            console.log("********************** " + name + " log ends **********************");
        // }
    }
}

