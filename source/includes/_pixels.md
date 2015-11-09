# Partner Pixels
In order to allow partner distribution channels to optimize conversion rates, Causemo allows these channels to add pixels on the various pages. <a href='mailto:engineering@causemo.com?Subject=Sign%20Up%20for%20a%20Partner%20Pixel' target='_top'>Sign Up for Partner Pixel</a>.

## Pixel Pages
The Causemo Causes UI is a single-page application; thus the UI only loads when the user first arrives to the site. However, there are various states the UI is in and this corresponds to the following "pages":

* `_all_`: If you use `_all_` as the page, it will always drop the HTML code for the given referral code. However, if there is another pixel defined for the page, it will use that one instead. This option is considered to the the "default" pixel and then you can define "overriding" pixels
* `causes`: The causes page 
* `cause`: An individual cause page
* `campaign`: A campaign page
* `donated`: The user made a donation
* `pledged`: The user made a pledge

## Usage Examples
Some examples how the partner pixels can be used.

### Direct Links
A partner might have a direct link from a banner ad or some other type of ad unit. To set the referralCode, the URL needs to have a query parameter called `ref`. For example: `https://causes.causemo.com?ref=123` will direct users to the Causemo causes page and set the referralCode to be '123'. If there is a pixel defined for that referral code, it will be dropped on the page.

### Pledge Referral Code
When we capture a pledge, we can also capture a `referralCode` property as well. A client can pass `referralCode` in the request body. When a SessionToken is generated for the pledge, we will record the `referralCode` as well. When the user uses the SessionToken (either from email or some other click through), it will use the provided `referralCode` for that pledge.

### Pledge NO Referral Code
Some partners might not need distinct referral codes for pledges and just want to drop a generic HTML snippet on the page. For this, the partner does not need to pass a `referralCode` in the pledge body. Instead we will use the app identifier for this partner. For example, if this partner appId is `123456`, we will record the referralCode as `app::123456`. The first few letters enable us to know this is an app identifier and the last set of numbers is the appId.

## Restrictions
* The HTML pixel code is dropped within a sandboxed iFrame
* We will continue dropping the partner HTML for 14 days, user clears cookie, or is brought to Causemo by another partner; which ever event happens first
* The last partner who drove a user to Causemo will have their HTML code on the page
