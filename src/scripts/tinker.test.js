import React from 'react';

let consoleLog = [];
let consoleLine = 0;

const countrydata =
{"error":false,
"msg":"countries details: 'none' have been retrieved",
"data":[
    {"name":"Bangladesh"},{"name":"Belgium"},{"name":"Burkina Faso"},{"name":"Bulgaria"},
    {"name":"Bosnia and Herzegovina"},{"name":"Barbados"},{"name":"Wallis and Futuna"},
    {"name":"Saint Barthelemy"},{"name":"Bermuda"},{"name":"Brunei"},{"name":"Bolivia"},
    {"name":"Bahrain"},{"name":"Burundi"},{"name":"Benin"},{"name":"Bhutan"},{"name":"Jamaica"},
    {"name":"Bouvet Island"},{"name":"Botswana"},{"name":"Samoa"},
    {"name":"Bonaire, Saint Eustatius and Saba "},{"name":"Brazil"},{"name":"Bahamas"},
    {"name":"Jersey"},{"name":"Belarus"},{"name":"Belize"},{"name":"Russia"},{"name":"Rwanda"},
    {"name":"Serbia"},{"name":"Timor-Leste"},{"name":"Réunion"},{"name":"Turkmenistan"},
    {"name":"Tajikistan"},{"name":"Romania"},{"name":"Tokelau"},{"name":"Guinea-Bissau"},
    {"name":"Guam"},{"name":"Guatemala"},{"name":"South Georgia and the South Sandwich Islands"},
    {"name":"Greece"},{"name":"Equatorial Guinea"},{"name":"Guadeloupe"},{"name":"Japan"},
    {"name":"Guyana"},{"name":"Guernsey"},{"name":"Georgia"},{"name":"Grenada"},
    {"name":"United Kingdom"},{"name":"Gabon"},{"name":"El Salvador"},{"name":"Guinea"},
    {"name":"Gambia"},{"name":"Greenland"},{"name":"Gibraltar"},{"name":"Ghana"},{"name":"Oman"},
    {"name":"Tunisia"},{"name":"Jordan"},{"name":"Croatia"},{"name":"Haiti"},{"name":"Hungary"},
    {"name":"Hong Kong"},{"name":"Honduras"},{"name":"Heard Island and McDonald Islands"},
    {"name":"Venezuela"},{"name":"Vatican City State (Holy See)"},{"name":"Puerto Rico"},
    {"name":"Palestinian Territory"},{"name":"Palau"},{"name":"Portugal"},
    {"name":"Svalbard and Jan Mayen"},{"name":"Paraguay"},{"name":"Iraq"},{"name":"Panama"},
    {"name":"French Polynesia"},{"name":"Papua New Guinea"},{"name":"Peru"},{"name":"Pakistan"},
    {"name":"Philippines"},{"name":"Pitcairn"},{"name":"Poland"},{"name":"Saint Pierre and Miquelon"},
    {"name":"Zambia"},{"name":"Western Sahara"},{"name":"Estonia"},{"name":"Egypt"},
    {"name":"Cocos (Keeling) Islands"},{"name":"South Africa"},{"name":"Ecuador"},{"name":"Italy"},
    {"name":"Vietnam"},{"name":"Solomon Islands"},{"name":"Ethiopia"},{"name":"Somalia"},
    {"name":"Zimbabwe"},{"name":"Saudi Arabia"},{"name":"Spain"},{"name":"Eritrea"},
    {"name":"Montenegro"},{"name":"Moldova"},{"name":"Madagascar"},{"name":"Saint Martin"},
    {"name":"Morocco"},{"name":"Monaco"},{"name":"Uzbekistan"},{"name":"Myanmar"},{"name":"Mali"},
    {"name":"Macau"},{"name":"Mongolia"},{"name":"Marshall Islands"},{"name":"Macedonia"},
    {"name":"Mauritius"},{"name":"Malta"},{"name":"Malawi"},{"name":"Maldives"},
    {"name":"Martinique"},{"name":"Northern Mariana Islands"},{"name":"Montserrat"},
    {"name":"Mauritania"},{"name":"Isle of Man"},{"name":"Uganda"},{"name":"Tanzania"},
    {"name":"Malaysia"},{"name":"Mexico"},{"name":"Israel"},{"name":"France"},
    {"name":"British Indian Ocean Territory"},{"name":"Saint Helena"},{"name":"Finland"},
    {"name":"Fiji"},{"name":"Falkland Islands"},{"name":"Micronesia"},{"name":"Faroe Islands"},
    {"name":"Nicaragua"},{"name":"Netherlands"},{"name":"Norway"},{"name":"Namibia"},
    {"name":"Vanuatu"},{"name":"New Caledonia"},{"name":"Niger"},{"name":"Norfolk Island"},
    {"name":"Nigeria"},{"name":"New Zealand"},{"name":"Nepal"},{"name":"Nauru"},{"name":"Niue"},
    {"name":"Cook Islands"},{"name":"Kosovo"},{"name":"Ivory Coast"},{"name":"Switzerland"},
    {"name":"Colombia"},{"name":"China"},{"name":"Cameroon"},{"name":"Chile"},
    {"name":"Cocos Islands"},{"name":"Canada"},{"name":"Congo"},{"name":"Central African Republic"},
    {"name":"Democratic Republic of the Congo"},{"name":"Czech Republic"},{"name":"Cyprus"},
    {"name":"Christmas Island"},{"name":"Costa Rica"},{"name":"Curacao"},{"name":"Cape Verde"},
    {"name":"Cuba"},{"name":"Swaziland"},{"name":"Syria"},{"name":"Sint Maarten"},
    {"name":"Kyrgyzstan"},{"name":"Kenya"},{"name":"South Sudan"},{"name":"Suriname"},
    {"name":"Kiribati"},{"name":"Cambodia"},{"name":"Saint Kitts and Nevis"},{"name":"Comoros"},
    {"name":"Sao Tome and Principe"},{"name":"Slovakia"},{"name":"South Korea"},{"name":"Slovenia"},
    {"name":"North Korea"},{"name":"Kuwait"},{"name":"Senegal"},{"name":"San Marino"},
    {"name":"Sierra Leone"},{"name":"Seychelles"},{"name":"Kazakhstan"},{"name":"Cayman Islands"},
    {"name":"Singapore"},{"name":"Sweden"},{"name":"Sudan"},{"name":"Dominican Republic"},
    {"name":"Dominica"},{"name":"Djibouti"},{"name":"Denmark"},{"name":"British Virgin Islands"},
    {"name":"Germany"},{"name":"Yemen"},{"name":"Algeria"},{"name":"United States"},
    {"name":"Uruguay"},{"name":"Mayotte"},{"name":"United States Minor Outlying Islands"},
    {"name":"Lebanon"},{"name":"Saint Lucia"},{"name":"Laos"},{"name":"Tuvalu"},{"name":"Taiwan"},
    {"name":"Trinidad and Tobago"},{"name":"Turkey"},{"name":"Sri Lanka"},{"name":"Liechtenstein"},
    {"name":"Latvia"},{"name":"Tonga"},{"name":"Lithuania"},{"name":"Luxembourg"},{"name":"Liberia"},
    {"name":"Lesotho"},{"name":"Thailand"},{"name":"French Southern Territories"},{"name":"Togo"},
    {"name":"Chad"},{"name":"Turks and Caicos Islands"},{"name":"Libya"},{"name":"Vatican"},
    {"name":"Saint Vincent and the Grenadines"},{"name":"United Arab Emirates"},{"name":"Andorra"},
    {"name":"Antigua and Barbuda"},{"name":"Afghanistan"},{"name":"Anguilla"},
    {"name":"U.S. Virgin Islands"},{"name":"Iceland"},{"name":"Iran"},{"name":"Armenia"},
    {"name":"Albania"},{"name":"Angola"},{"name":"Antarctica"},{"name":"American Samoa"},
    {"name":"Argentina"},{"name":"Australia"},{"name":"Austria"},{"name":"Aruba"},{"name":"India"},
    {"name":"Aland Islands"},{"name":"Azerbaijan"},{"name":"Ireland"},{"name":"Indonesia"},
    {"name":"Ukraine"},{"name":"Qatar"},{"name":"Mozambique"}]}

test('Starter: Testing the TDD Pipes', () => {
    
    consoleLog = [];
    consoleLine = 0;
    consoleLog[consoleLine++] = "Testing the TDD pipes";
    expect(consoleLog[0]).toBe("Testing the TDD pipes");
    
});

test('Basic Access', () => {
    
    consoleLog = [];
    consoleLine = 0;
    expect(countrydata.data[0].name).toBe("Bangladesh");
    expect(countrydata.data[3].name).toBe("Bulgaria");
    expect(countrydata.data[15].name).toBe("Jamaica");
    expect(countrydata.data[46].name).toBe("United Kingdom");

});

test('Basic Map and Access', () => {

    const listItem = countrydata.data.map((obj, i, arr) => {
        return (arr[i].name)
      });

    expect(listItem[0]).toBe("Bangladesh");
    expect(listItem[3]).toBe("Bulgaria");
    expect(listItem[15]).toBe("Jamaica");
    expect(listItem[46]).toBe("United Kingdom");

    expect(`src${listItem[0]}`).toBe("srcBangladesh");

    let i = 0;
    expect(<option key={i} value={`src${listItem[0]}`}>{`${listItem[0]}`}</option>).toEqual
        (<option key="0" value="srcBangladesh">Bangladesh</option>);
});

test('Basic Map and Access', () => {

    const listItem = countrydata.data.map((obj, i, arr) => {
        return (
            <option key={i} value={`src${arr[i].name}`.replace(/\s/g, '') }>{`${arr[i].name}`}</option>
        )
    });
    expect(listItem[0]).toEqual
        (<option key="0" value="srcBangladesh">Bangladesh</option>);
    expect(listItem[3]).toEqual
        (<option key="3" value="srcBulgaria">Bulgaria</option>);
    expect(listItem[15]).toEqual
        (<option key="15" value="srcJamaica">Jamaica</option>);
    expect(listItem[46]).toEqual
        (<option key="46" value="srcUnitedKingdom">United Kingdom</option>);

});

test('Sort Array within the Object As function', () => {
    function sCD (a, b) {
        let result;
        if (a.name < b.name) {
            result = -1;
        } else if (a.name > b.name) {
            result = 1;
        } else {
            result = 0;
        }
        return result;
    }

    const sortedCD = countrydata.data.sort(sCD);
    expect(sortedCD[0].name).toBe("Afghanistan");
    expect(sortedCD[8].name).toBe("Antarctica");
    expect(sortedCD[40].name).toBe("Canada");
});

test('Sort Array within the Object As inline function', () => {

    const sortedCD = countrydata.data.sort((a, b) => {
        let result;
        if (a.name < b.name) {
            result = -1;
        } else if (a.name > b.name) {
            result = 1;
        } else {
            result = 0;
        }
        return result;
    });
    expect(sortedCD[0].name).toBe("Afghanistan");
    expect(sortedCD[8].name).toBe("Antarctica");
    expect(sortedCD[40].name).toBe("Canada");
});