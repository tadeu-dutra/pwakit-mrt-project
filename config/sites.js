/*
 * Copyright (c) 2023, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

// Provide the sites for your app. Each site includes site id, and its localization configuration.
// You can also provide aliases for your locale. They will be used in place of your locale id when generating paths across the app
module.exports = [
    {
        id: 'RefArch',
        l10n: {
            supportedCurrencies: ['USD'],
            defaultCurrency: 'USD',
            defaultLocale: 'en-US',
            supportedLocales: [
                {
                    id: 'en-US',
                    alias: 'us',
                    preferredCurrency: 'USD'
                },
                {
                    id: 'en-CA',
                    preferredCurrency: "USD"
                }
            ]
        }
    },
    {
        id: 'MULTISITE',
        l10n: {
            supportedCurrencies: ['USD', 'GBP', 'EUR'],
            defaultCurrency: 'USD',
            defaultLocale: 'en-US',
            supportedLocales: [
                {
                    id: 'en-US',
                    alias: 'us',
                    preferredCurrency: 'USD'
                },
                {
                    id: 'en-GB',
                    alias: 'gb',
                    preferredCurrency: 'GBP'
                },
                {
                    id: 'fr-FR',
                    alias: 'fr',
                    preferredCurrency: 'EUR'
                }
            ]
        }
    },
    {
        id: 'RefArchGlobal',
        l10n: {
            supportedCurrencies: ["CHY", "GBP", "EUR", "JPY", "BRL"],
            defaultCurrency: "GBP",
            supportedLocales: [
                {
                    id: "zh-CN",
                    preferredCurrency: "CHY"
                },
                {
                    id: "en-GB",
                    preferredCurrency: "GBP"
                },
                {
                    id: "ja-JP",
                    alias: "jp",
                    preferredCurrency: "JPY"
                },
                {
                    id: "fr-FR",
                    preferredCurrency: "EUR"
                },
                {
                    id: "it-IT",
                    preferredCurrency: "EUR"
                },
                {
                    id: "pt-BR",
                    alias: "brazil",
                    preferredCurrency: "BRL"
                }
            ],
            defaultLocale: "en-GB"
        }
    }
]
