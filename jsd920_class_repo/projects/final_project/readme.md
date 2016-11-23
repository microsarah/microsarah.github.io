# Project Overview

## Project Description
I want to create an interactive version of a film project I made a few years ago. The concept behind the film is that it's someone's birthday everyday– and there are celebrations happening that we're not privy to in our daily lives. I was also fascinated to see how many birthday-related videos are uploaded to YouTube.

Instead of a static video, I'd like to create an app where the user can toggle through videos that are being pulled in realtime from YouTube based on queries I control. I want the app to look like a home movie: with a date counter in the upper righthand corner, title in the upper left.


## Functional Components

### Required
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Read YouTube API documentation to define needs/approach | H | 2-4hrs | 3hrs | 3hrs |
| Use the YouTube API to pull video source URLs and titles | H | 2-4hrs | |  |
| Add fullscreen video to the background of the site | H | 1-2hrs | |  |
| Display title of video (title will be a date) in mm/dd/yy format | H | 2-4hrs | |  |
| Program left and right arrow keys to move backwards/forwards through videos | H | 1-2hrs | |  |
| Host the site | H | 1 hr | |  |


### Nice to Have
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| If a video has been played, don't play it again (unless there are no other query results) | H | 2-4hrs |  |  |
| Only include February 29 every 4 full 'years' | H | 1-2hrs | |  |


### Bonus
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| If possible, optimize playback time by pre-loading upcoming video | H | 6-10hrs |  |  |


## Helper Functions
Use this section to document all helper functions. These functions should be versatile enough to be reused in other projects
* a function that pulls videos from a site
* a function that loads videos as the background of a container

## Additional Libraries
* jQuery

## JSON Data Keys
 Use this section to list specific JSON Data Key mappings.  

## jQuery Functional Requirements
* append()
* keypress()
* addClass() / removeClass()

## Change Log
// Use this section to document what changes were made and when.

## Issues and Resolutions
**ERROR**: 
- Uncaught ReferenceError: ytcfg is not defined
- Unfortunately it's a youtube bug: http://stackoverflow.com/questions/40622204/uncaught-referenceerror-ytcfg-is-not-defined

<!-- #### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object -->

**ERROR** the dayCounter var is counting up with each video– need to set it to end at month's NumDays

**ERROR** block videos that block embedding


