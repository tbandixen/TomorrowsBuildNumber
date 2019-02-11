# Tomorrows build-number

## Usage

Create a bookmark in your browser (_Edge is not a browser..._) of choice with the following settings:

Name: `Tomorrows build`

URL:

```javascript
javascript:(function(t){var e=new Date,i=new Date(e.getFullYear(),0,1),r=e.getTime()-i.getTime(),n=Math.ceil(r/864e5)+1,o="2.3."+e.getFullYear().toString().substring(2)+("000000000"+n).substr(-3);navigator.clipboard.writeText(o.toString()).then(void 0,function(){alert("Unable to write to 📋. :-( Tomorrows build-number is: "+o)})})();
```

If you are asked on which build the issue will be fixed, just click the bookmarklet and the version is in your clipboard.

With this bookmarklet you always have the latest version of this script.

### Testing

#### Does not work with

- Edge
