export interface IMessage extends IText { 
    id: string;
    isUser: boolean;
    timestamp: Date;
  }

  export interface IText {
    text: string;
  }