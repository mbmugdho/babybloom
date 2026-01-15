'use client'

import Link from 'next/link'
import { Package, Layers, Users, Star, PlusCircle } from 'lucide-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

const FLAG_COLORS = ['#7EB09B', '#F8C8C8', '#E8C8A0']
const ROLE_COLORS = ['#7EB09B', '#B2BEC3']

export default function AdminDashboardClient({ data }) {
  const { stats, productsPerCategory, flagDistribution, roleDistribution } =
    data

  return (
    <div
      className="
        relative overflow-hidden
        rounded-3xl
        border border-neutral-200/80
        bg-white/80
        shadow-section
        backdrop-blur-md
        px-4 py-6
        sm:px-6 sm:py-7
        lg:px-8 lg:py-8
      "
    >
      {/* Glows */}
      <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-primary-100/45 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-14 h-40 w-44 rounded-full bg-accent-100/45 blur-3xl" />

      <div className="relative z-10 space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-1">
              Admin dashboard
            </p>
            <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-700">
              BabyBloom cockpit
            </h1>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              A quick overview of your curated products, categories, and user
              base. Use the shortcuts and charts to keep an eye on your store.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/add-product"
              className="
                inline-flex items-center gap-2
                rounded-full
                px-4 py-2
                text-xs sm:text-sm font-semibold
                text-white
                bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400
                shadow-soft
                hover:from-primary-500 hover:to-accent-500
                transition
              "
            >
              <PlusCircle size={16} />
              Add new product
            </Link>
            <Link
              href="/products"
              className="
                inline-flex items-center gap-2
                rounded-full
                px-4 py-2
                text-xs sm:text-sm font-semibold
                border border-neutral-200
                bg-white/80
                text-neutral-600
                shadow-soft
                hover:bg-neutral-50
                transition
              "
            >
              View store
            </Link>
          </div>
        </div>

        {/* Top stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <StatCard
            icon={Package}
            label="Total products"
            value={stats.productCount}
            color="primary"
          />
          <StatCard
            icon={Layers}
            label="Active categories"
            value={stats.categoryCount}
            color="secondary"
          />
          <StatCard
            icon={Users}
            label="Registered users"
            value={stats.userCount}
            color="accent"
          />
          <StatCard
            icon={Star}
            label="Best sellers"
            value={stats.bestSellerCount}
            color="primary"
          />
        </div>

        {/* Charts row */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          {/* Products per category (bar chart) */}
          <div
            className="
              rounded-2xl
              bg-neutral-50/90
              border border-neutral-200/80
              shadow-soft
              backdrop-blur-md
              p-4 sm:p-5
              flex flex-col
              min-h-[260px]
            "
          >
            <h2 className="font-poppins text-sm font-semibold text-neutral-600 mb-1">
              Products per category
            </h2>
            <p className="text-[11px] text-neutral-400 mb-3">
              See how your catalog is distributed across main categories.
            </p>
            <div className="flex-1 min-h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={productsPerCategory}
                  margin={{ top: 10, right: 10, left: -20, bottom: 20 }}
                >
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 10, fill: '#636E72' }}
                    interval={0}
                    angle={-20}
                    textAnchor="end"
                  />
                  <YAxis
                    allowDecimals={false}
                    tick={{ fontSize: 10, fill: '#636E72' }}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: '1px solid rgba(0,0,0,0.08)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.06)',
                      fontSize: 11,
                    }}
                  />
                  <Bar dataKey="count" fill="#7EB09B" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie charts (flags + roles) */}
          <div className="grid gap-4 sm:grid-rows-2">
            {/* Product flags */}
            <div
              className="
                rounded-2xl
                bg-white/90
                border border-neutral-200/80
                shadow-soft
                backdrop-blur-md
                p-4
                flex flex-col
                min-h-[160px]
              "
            >
              <h2 className="font-poppins text-sm font-semibold text-neutral-600 mb-1">
                Product highlights
              </h2>
              <p className="text-[11px] text-neutral-400 mb-2">
                Distribution of best sellers, featured, and new arrivals.
              </p>
              <div className="flex-1 flex items-center justify-center">
                <ResponsiveContainer width="100%" height={130}>
                  <PieChart>
                    <Pie
                      data={flagDistribution}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={30}
                      outerRadius={50}
                      paddingAngle={2}
                    >
                      {flagDistribution.map((entry, index) => (
                        <Cell
                          key={`flag-${index}`}
                          fill={FLAG_COLORS[index % FLAG_COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap gap-2 justify-center mt-1">
                {flagDistribution.map((f, i) => (
                  <span
                    key={f.name}
                    className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-[10px] text-neutral-500"
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: FLAG_COLORS[i] }}
                    />
                    {f.name}: {f.value}
                  </span>
                ))}
              </div>
            </div>

            {/* User roles */}
            <div
              className="
                rounded-2xl
                bg-white/90
                border border-neutral-200/80
                shadow-soft
                backdrop-blur-md
                p-4
                flex flex-col
                min-h-[160px]
              "
            >
              <h2 className="font-poppins text-sm font-semibold text-neutral-600 mb-1">
                Users by role
              </h2>
              <p className="text-[11px] text-neutral-400 mb-2">
                Quick look at how many admins vs regular users are registered.
              </p>
              <div className="flex-1 flex items-center justify-center">
                <ResponsiveContainer width="100%" height={130}>
                  <PieChart>
                    <Pie
                      data={roleDistribution}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={30}
                      outerRadius={50}
                      paddingAngle={2}
                    >
                      {roleDistribution.map((entry, index) => (
                        <Cell
                          key={`role-${index}`}
                          fill={ROLE_COLORS[index % ROLE_COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap gap-2 justify-center mt-1">
                {roleDistribution.map((r, i) => (
                  <span
                    key={r.name}
                    className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-[10px] text-neutral-500"
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: ROLE_COLORS[i] }}
                    />
                    {r.name}: {r.value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, label, value, color }) {
  const colorMap = {
    primary: {
      border: 'border-primary-100',
      bg: 'bg-white/80',
      glow: 'bg-primary-100/50',
      iconBg: 'bg-primary-50',
      iconText: 'text-primary-600',
    },
    secondary: {
      border: 'border-secondary-100',
      bg: 'bg-white/80',
      glow: 'bg-secondary-100/50',
      iconBg: 'bg-secondary-50',
      iconText: 'text-secondary-600',
    },
    accent: {
      border: 'border-accent-100',
      bg: 'bg-white/80',
      glow: 'bg-accent-100/50',
      iconBg: 'bg-accent-50',
      iconText: 'text-accent-700',
    },
  }[color || 'primary']

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl
        border ${colorMap.border}
        ${colorMap.bg}
        shadow-soft backdrop-blur-md p-4
      `}
    >
      <div
        className={`
          absolute -top-6 -right-6 h-16 w-16 rounded-full
          ${colorMap.glow} blur-2xl
        `}
      />
      <div className="relative z-10">
        <div
          className={`
            inline-flex h-9 w-9 items-center justify-center rounded-full
            ${colorMap.iconBg} ${colorMap.iconText} mb-2
          `}
        >
          <Icon size={18} />
        </div>
        <p className="text-xs text-neutral-400">{label}</p>
        <p className="font-poppins text-xl font-semibold text-neutral-700">
          {value}
        </p>
      </div>
    </div>
  )
}
