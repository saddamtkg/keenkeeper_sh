'use client';
import { FiSearch } from 'react-icons/fi';

const FilterTimeline = ({
  search,
  setSearch,
  filter,
  setFilter,
  sort,
  setSort,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
      {/* Search */}
      <label className="input input-bordered flex items-center gap-2 flex-1 text-sm">
        <FiSearch />
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="grow"
        />
      </label>

      {/* Type Filter */}
      <select
        value={filter}
        onChange={e => setFilter(e.target.value)}
        className="select select-bordered flex-1 sm:flex-none text-sm"
      >
        <option value="all">All Types</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>

      {/* Sort */}
      <select
        value={sort}
        onChange={e => setSort(e.target.value)}
        className="select select-bordered flex-1 sm:flex-none text-sm"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
};

export default FilterTimeline;
