import { TwitterTweetEmbed } from 'react-twitter-embed';

export function Tweetembed({tweet}) {
    //https://twitter.com/Shan19317228/status/1615763303887958020?s=20&t=5GUdcrbRoPUNbvDzZaInig
    // console.log('tweet',tweet)
    // const tweetsplit = tweet.split('/')[5];
    const tweetId = tweet[5].split('?')[0];
  return (
    <div className=' flex items-center justify-center m-6 bg-red-300 w-3/4'>
      <TwitterTweetEmbed
      tweetId={tweetId}
      options={{ width:'full' }}
    />
    </div>
    
  );
}
