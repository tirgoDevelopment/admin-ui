import { APP_INITIALIZER, EnvironmentProviders, importProvidersFrom, inject, Provider } from '@angular/core';
import { TRANSLOCO_CONFIG, TRANSLOCO_LOADER, translocoConfig, TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { TranslocoHttpLoader } from 'app/core/transloco/transloco.http-loader';

export const provideTransloco = (): Array<Provider | EnvironmentProviders> =>
{
    return [
        importProvidersFrom(TranslocoModule),
        {
            provide : TRANSLOCO_CONFIG,
            useValue: translocoConfig({
                availableLangs      : [
                    {
                        id   : 'en',
                        label: 'English',
                    },
                    {
                        id   : 'uz',
                        label: 'Uzbekistan',
                    },
                    {
                        id   : 'ru',
                        label: 'Russian',
                    },
                ],
                defaultLang         : 'en',
                fallbackLang        : 'en',
                reRenderOnLangChange: true,
                prodMode            : true,
            }),
        },
        {
            provide : TRANSLOCO_LOADER,
            useClass: TranslocoHttpLoader,
        },
        {
            provide   : APP_INITIALIZER,
            useFactory: () =>
            {
                const translocoService = inject(TranslocoService);
                const defaultLang = translocoService.getDefaultLang();
                translocoService.setActiveLang(defaultLang);

                return () => translocoService.load(defaultLang).toPromise();
            },
            multi     : true,
        },
    ];
};
