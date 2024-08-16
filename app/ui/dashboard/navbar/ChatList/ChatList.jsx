import Image from 'next/image';

const chatData = [
  {
    id: 1,
    name: 'David',
    message: 'where u at?',
    time: '08:50',
    avatar: '/path/to/noavatar.png',
    status: 'recent',
  },
  {
    id: 2,
    name: 'Daisy',
    message: 'Daisy sent a p...',
    time: '11:34',
    avatar: '/path/to/noavatar.png',
    status: 'recent',
  },
  {
    id: 3,
    name: 'Tom',
    message: 'You: ok',
    time: '2d',
    avatar: '/path/to/noavatar.png',
    status: 'older',
  },
  {
    id: 4,
    name: 'Anna',
    message: 'asdasdasd',
    time: '4d',
    avatar: '/path/to/noavatar.png',
    status: 'older',
  },
  {
    id: 5,
    name: 'Liza',
    message: 'asdasdasd',
    time: '6d',
    avatar: '/path/to/noavatar.png',
    status: 'older',
  },
];

export default function ChatList() {
  return (
    <div className="chat-list">
      <div className="chat-header flex justify-between px-4 py-2 border-b text-black">
        <span className="font-bold">CHAT</span>
        <span className="font-bold">SETTINGS</span>
      </div>
      <div className="chat-section">
        <h2 className="px-4 py-2 text-xs font-semibold text-black">RECENT</h2>
        {chatData
          .filter(chat => chat.status === 'recent')
          .map(chat => (
            <div key={chat.id} className="flex items-center px-4 py-2 border-b text-black">
              <Image
                src={chat.avatar}
                alt={`${chat.name}'s avatar`}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-3">
                <div className="font-semibold">{chat.name}</div>
                <div className="text-black text-sm">{chat.message}</div>
              </div>
              <div className="ml-auto text-xs text-black">{chat.time}</div>
            </div>
          ))}
      </div>
      <div className="chat-section">
        <h2 className="px-4 py-2 text-xs font-semibold text-black">OLDER</h2>
        {chatData
          .filter(chat => chat.status === 'older')
          .map(chat => (
            <div key={chat.id} className="flex items-center px-4 py-2 border-b text-black">
              <Image
                src={chat.avatar}
                alt={`${chat.name}'s avatar`}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-3">
                <div className="font-semibold">{chat.name}</div>
                <div className="text-black text-sm">{chat.message}</div>
              </div>
              <div className="ml-auto text-xs text-black">{chat.time}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
