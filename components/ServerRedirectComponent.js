import { redirect } from 'next/navigation';

export default function Component({ slug }) {
  if (slug === 'redirectMe') {
    redirect('/redirected');
  } else {
    return (
      <div>
        This is a server component.
        <br />
        Slug is{' '}
        <pre
          style={{
            display: 'inline-block',
            background: 'grey',
            padding: '0.25rem 0.5rem'
          }}
        >
          /{slug}
        </pre>
        .
      </div>
    );
  }
}
