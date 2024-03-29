import { NgModule, ErrorHandler }		                                      from '@angular/core';
import {HttpClientModule}                                                     from '@angular/common/http';
import { BrowserModule }                                                      from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   								  from '@angular/forms';

import { IonicApp, IonicModule, IonicErrorHandler, DeepLinkConfig }           from 'ionic-angular';
import { StatusBar }                                                          from '@ionic-native/status-bar';
import { SuperTabsModule }                                                    from 'ionic2-super-tabs';
import { AgmCoreModule }                                                      from '@agm/core';
import { ChartsModule }                                                       from 'ng2-charts';


import { C8o }                                                                from "c8osdkangular";
import { C8oRouter } 			                                                    from 'c8ocaf';
import { ActionBeans }                                                        from '../services/actionbeans.service';

import { MyApp } 				                                              from './app.component';
import {Transfer, TransferObject} from '@ionic-native/transfer';
import {File} from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { SocialSharing } from '@ionic-native/social-sharing';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/*=c8o_PagesImport*/


/**
 * Deep links to your pages so that the app can rout directly to the page url
 */
export const deepLinkConfig: DeepLinkConfig = {
    links: [/*=c8o_PagesLinks*/]
};

@NgModule({
    declarations: [
        MyApp,/*=c8o_PagesDeclarations*/
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule,
        SuperTabsModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyB0Nl1dX0kEsB5QZaNf6m-tnb1N-U5dpXs'
        }),
        IonicModule.forRoot(MyApp, {}, deepLinkConfig)
    ],
    bootstrap: [IonicApp],
    entryComponents: [MyApp,/*=c8o_PagesDeclarations*/],
    providers: [
        StatusBar,
        C8o,
        C8oRouter,
        Transfer,
        TransferObject,
        File,
        FileOpener,
        StreamingMedia,
        SocialSharing,
        InAppBrowser,
        ActionBeans,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})

export class AppModule {}