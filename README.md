# in-milliseconds

Simply convert days, weeks, months, etc. to seconds.

And that's basically it. Typescript supported.

[Also check out in-seconds](https://github.com/Myzel394/in-seconds)

```typescript
import inMilliSeconds from "in-milliseconds";

inMilliSeconds.seconds(2) // 2000
inMilliSeconds.minutes(2) // 120000
inMilliSeconds.hours(2) // 7200000
inMilliSeconds.days(5) // 432000000
inMilliSeconds.weeks(4) // 2419200000
inMilliSeconds.months(11) // 28512000000
inMilliSeconds.years(2) // 63072000000
```

## Important note

`months` calculates with 30 days per month.

`years` calculates with 365 days per year.
