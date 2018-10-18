/* tslint:disable */
import { enableProdMode, NgModuleRef } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { Environment, decorateModuleRefProd, DistSufixTargetEnum, NgTemplateStrategyEnum } from './model';

enableProdMode();

// export const ENV_FIREBASE_CONFIG: any = FIREBASE_CONFIG;

export const environment: Environment = {
  production: true,
  showDevModule: false,
  distSufixTarget: DistSufixTargetEnum.Prod,
  // In 'production' mode always use Aot.
  ngTemplateStrategy: NgTemplateStrategyEnum.Aot,  

  /** Angular debug tools in the dev console
   * https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
   * @param modRef
   * @return {any}
   */
  decorateModuleRef: decorateModuleRefProd,
  ENV_PROVIDERS: [

  ]
};
