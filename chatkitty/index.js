import Chatkitty, { ChatKitty } from '@chatkitty/core'

export const chatKitty=ChatKitty.getInstance('16018374-316b-40ba-bdf3-5c3810ff8394');
export function channelDisplayName(channel){
    if(channel.type==='DIRECT'){
        return channel.members.map((member)=>member.displayName).join(', ');
    }else{
        return channel.name;
    }
}