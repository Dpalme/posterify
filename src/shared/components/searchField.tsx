import { useRef } from 'react';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { SearchIcon } from 'lucide-react';

export const SearchField = () => {
  const search = useSearch({ strict: false });
  const queryField = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <div className="flex w-full max-w-3xl flex-row gap-2 md:max-w-lg">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          navigate({
            to: '/search',
            search: { query: queryField.current?.value || '' },
          });
        }}
        className="flex w-full flex-col gap-2"
      >
        <label
          htmlFor="queryField"
          className="hidden"
        >
          Search
        </label>
        <div className="relative h-8">
          <input
            type="text"
            name="query"
            id="queryField"
            defaultValue={(search as { query: string }).query ?? ''}
            className="bg-gray-200 w-full rounded-full border border-gray-300 px-4 pl-10 leading-8 placeholder-shown:bg-gray-600 focus:bg-gray-200"
            placeholder='Search'
            ref={queryField}
            required={true}
          />
          <SearchIcon
            className="text-current pointer-events-none absolute top-1 left-2"
            height={24}
          />
        </div>
      </form>
    </div>
  );
};
