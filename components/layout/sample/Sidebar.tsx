import Link from 'next/link';

const sidebarItems = [
  {
    label: '機能1',
    href: '/sample/function1',
  },
  {
    label: '機能2',
    href: '/sample/function2',
  },
  {
    label: '機能3',
    href: '/sample/function3',
  },
];

export const Sidebar = () => {
  return (
    <aside>
      <div className='flex flex-col gap-2 text-baseGray'>
        <h2 className='text-xl font-bold'>機能</h2>
        <ul className='ml-4 flex flex-col gap-2'>
          {sidebarItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
