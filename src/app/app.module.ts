import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { ApiService } from './services/api.service';
import { EventEmitterService } from './services/event-emitter.service';
import { VariableService } from './services/variable.service';
import { NotificationService } from './services/localnotification.service';

// import { SQLiteService } from './services/sqlite.service';
// import { DetailService } from './services/detail.service';
// import { InitializeAppService } from './services/initialize.app.service';

// import { MigrationService } from './services/migrations.service';
// import { ProductRepository } from './repositories/data.repository';
// import { DatabaseService } from './services/database.service';


// export function initializeFactory(init: InitializeAppService) {
//     return () => init.initializeApp();
// }

const routerConfig: ExtraOptions = {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({})
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        VariableService,
        ApiService,
        EventEmitterService,
        NotificationService,
        // SQLiteService,
        // DetailService,

        // DatabaseService,

        // InitializeAppService,
        // {
        //     provide: APP_INITIALIZER,
        //     useFactory: initializeFactory,
        //     deps: [InitializeAppService],
        //     multi: true
        // },

        // MigrationService,
        // ProductRepository,
    ],
    // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
