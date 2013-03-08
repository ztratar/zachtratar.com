---
title: 'The New Facebook News Feed: A UX Breakdown'
---

The internet is blowing up with sensationalized articles on the new Facebook News Feed. I'm not a fan of that, so instead let's talk about design principles and user behavior.

The "Stories" are frigin HUGE
-----------------------------

This was the biggest surprise in my opinion. 

There are a couple emotions you want to achieve in feeds. The first is zen -- it's calming to get lost and just keep scrolling. The second is usually balanced chaos. The more stuff you see, the more active the site feels. Facebook still has zen, but the chaos seems to have been thrown out in favor of further simplicity. It takes more scrolling to see less items, but nothing is fighting for your attention. Instead of thinking, you're either looking at the top most "story" or you're scrolling to the next one.

Mobile works the same way. As you move from phone to computer the experience won't be nearly as jarring. If the feeds are identical on mobile and desktop, I wouldn't be surprised if they release a feature later to sync your spot on the feed.

This is Facebook's biggest change yet, but the risk is being overestimated
--------------------------------------------------------------------------

[Techcrunch's article](http://techcrunch.com/2013/03/07/facebook-risks-it-all/) says this is their most risky change yet. After the [Beacon](http://en.wikipedia.org/wiki/Facebook_Beacon) incident years ago, Facebook has become a more data-driven company. They have a huge data research team pillaging their logs to track user behavior. Is this is a big change? You betcha… it's the home page! On web applications with a news feed system, a heavy majority of all interaction is done on the home page. Is this a risky choice? Not really. They're releasing is slowly and watching the data. Risk is mitigated as they iterate -- and they will. Compared to the risk presented when Facebook opened up their [first developer APIs](http://money.cnn.com/2007/05/24/technology/facebook.fortune/), this is nothing (and it's only because of the data).

Sorting has been optimized out
------------------------------

By default, the feed is being changed to a combination of "new" and "popular". This is not done very often. Facebook can only do this effectively because their average user comes back to the site multiple times a day. This also means that the [demonized edge-rank algorithm](http://edgerank.net/) is probably taking more of a backseat or was altered substantially. Changing an algorithm from being entirely score based to purely chronologically dependent isn't easy at scale. I can't be 100% sure, but they probably managed to do this in one of two ways: 1. Manipulate the algorithm to give chronology a big boost or 2. Change the data structure to a cached stack while disallowing newly-calculated posts to overwrite incumbent data.

Users just want products that work. Over time, the algorithms to determine feed-worthy stories have become more and more accurate. I would find myself sorting by "most recent" very frequently just a year ago, but now I never click the button. If I'm like most users, then they finally found the sweet spot. That sweet spot enabled them to remove clutter from the interface and bridge the gap properly to mobile. Good job Facebook.

Navigation now follows real design rules
----------------------------------------

Almost all great web application have sidebars. They prove themselves as a great foundation for navigation and widget-style features, but can easily grow cumbersome. Less is usually more, but sometimes the metrics say otherwise. Design ideologies should never get in the way of what works for the end user.

This new sidebar works very well for a couple reasons. 

1. It's not melded into the same background as the rest of the site anymore. The different background creates a contrast that makes the separation feel clean instead of cluttered.
2. Because it is a sidebar instead of a widget, the common design rule of minimizing the number of container elements is followed.
3. It's responsive to the site width. I'd be curious to see what their analytics say about clickthroughs since certain studies have shown that icon-only navigation performs worse than those aided with text. That being said, the effect is dampened since Facebook is already a well-understood product by a majority of its user-base.

So what does this all mean?
---------------------------

It could mean many things. When shown larger posts, people naturally place a higher level of importance on it. Skipping a post without interacting with it feels like a riskier action, and thus, activity on posts further up the feed is likely going to increase while activity on posts further down will decrease. The like button and other assorted actions are no longer blue, but their click-targets have been increased in size. I would place a bet saying this combination results in more clicks.

With forced chronology and the hypothesis mentioned above, I think the end result for most users will be more action on posts right when they create them and less importance or notifications on historically older, but popular posts. It's more about the "new" than the "popular" and thus you'll want to keep posting more to garner more likes. Feed that thirst for acceptance amongst your peers! This all fits very neatly into [Mark's pseudo-Moore's law](http://news.cnet.com/8301-1023_3-57536659-93/zuckerberg-in-10-years-folks-will-share-1000-times-what-they-do-now/). 
