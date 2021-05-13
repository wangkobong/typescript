{
  type Video = {
    title: string;
    author: string;

  };
  
  //[1.2].map(item => item * item); // [1, 4];
  
  type Optional<T> = {
    [P in keyof T]?: T[P] // for ...in
  };
  
  type Readonly2<T> = {
    readonly [P in keyof T]: T[P]
  }
  
  type VideoOptional = Optional<Video>;
  const VideoOp: VideoOptional = {
    
  };
  
  
  type VideoReadonly = Readonly2<Video>;
  
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // }
  
  // type VideoReadonly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // };
  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
  } 
}