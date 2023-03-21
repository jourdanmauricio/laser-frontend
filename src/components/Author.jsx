import { formatDateTable } from '../helpers/functions';

const Author = ({ post, textColor }) => {
  return (
    <>
      <style jsx global>{`
        :root {
          // BLOG PAGE
          --authorTextColor: ${textColor};
        }
      `}</style>

      <div className="flex justify-end items-center gap-4 mt-4">
        <div
          style={{ backgroundImage: `url('${post.user.image}')` }}
          className="w-16 h-16 rounded-full bg-cover bg-center 
              border border-solid border-gray-300 shadow-[0_0_10px_rgba(0,0,0,0.1)]"
        />

        <div className="text-authorTextColor font-mono text-sm">
          <p>{post.user.name}</p>
          <p>{formatDateTable(post.created)}</p>
        </div>
      </div>
    </>
  );
};

export default Author;
