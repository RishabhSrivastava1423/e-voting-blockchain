import { logging, PersistentMap } from 'near-sdk-as';

const CandidateURL = new PersistentMap<string,string>("CandidateURL");
const CandidatePair = new PersistentMap<string,string[]>("Candidate Pair");

const PromtArray = new PersistentMap<string,string[]>("arrays of prompt");
const VoteArray = new PersistentMap<string,i32[]>("stores votes");

const userParticipation = new PersistentMap<string,string[]>("user participation record");

export function getUrl(name:string):string{
  if(CandidateURL.contains(name)){
    return CandidateURL.getSome(name);
  }else{
    logging.log("Can't find any user with "+ name)
    return ""
  }
}

export function didParticipate(prompt:string, user:string):bool{
  if(userParticipation.contains(prompt)){
    let getArray = userParticipation.getSome(prompt);
    return getArray.includes(user);
  }else{
    logging.log('prompt not found');
    return false;
  }
}

export function getAllPrompt():string[]{
  if(PromtArray.contains('AllArrays')){
    return PromtArray.getSome('AllArrays');
  }else{
    logging.log("No Promts Found");
    return [];
  }
}

export function getVotes(prompt:string):i32[]{
  if(VoteArray.contains(prompt)){
    return VoteArray.getSome(prompt);
  }else{
    logging.log("prompts not found");
    return [0,0];
  }
}

export function getCandidatePair(prompt:string):string[]{
  if(CandidatePair.contains(prompt)){
    return CandidatePair.getSome(prompt);
  }
  else{
    logging.log("Propmt not found");
    return [];
  }
}


export function addUrl(name:string, url:string):void{
  CandidateURL.set(name,url);
  logging.log("added url for "+ name);
}

// Adding Candidate to Block Chain
export function addCandidatePair(prompt:string, name1:string, name2:string):void{
  CandidatePair.set(prompt,[name1,name2]);
}

export function addToPromptArray(prompt:string):void{
  logging.log("Added to Prompt Array");
  if(PromtArray.contains("AllArrays")){
    let tempArray = PromtArray.getSome("AllArrays");
    tempArray.push(prompt)
    PromtArray.set("AllArrays",tempArray);

  }else{
    PromtArray.set("AllArrays",[prompt]);
  }
}
export function clearPromptArray():void{
  logging.log('clearing prompt array');
  PromtArray.delete("AllArrays")
}
// Addition of Vote to block chain
export function addVote(prompt:string, index:i32):void{

  if(VoteArray.contains(prompt)){
    let tempArray = VoteArray.getSome(prompt);
    let tempVal = tempArray[index];
    let newVal = tempVal + 1;
    tempArray[index] = newVal;
    VoteArray.set(prompt,tempArray);
  }else{
    let newArray = [0,0];
    newArray[index] = 1;
    VoteArray.set(prompt,newArray);
  }
}

//Checking if User has voted or not for the corresponding poll
export function recordUser(prompt:string,user:string):void{
  if(userParticipation.contains(prompt)){
    let tempArray = userParticipation.getSome(prompt);
    tempArray.push(user);
    userParticipation.set(prompt,tempArray);
  }else{
    userParticipation.set(prompt,[user]);
  }
}