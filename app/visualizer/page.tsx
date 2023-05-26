import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { Visualizer } from '@/models.ts/Visualizer'
import Slider from '@/components/Slider'
import Link from 'next/link'
import Image from 'next/image'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Visualizer() {
  return (

    <div className="flex h-screen flex-col items-center justify-between p-24">

      <Link
        href="/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.png"
          alt="Copyright Website Logo"
          width={370}
          height={85}
          priority
        />
      </Link>

      <h3 className="text-base font-semibold leading-6 text-gray-900">Fair Use Visualizer</h3>
      <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-5 md:divide-x md:divide-y-0">
        
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-base font-normal text-gray-900">Factor 1</dt>
          <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div>
              <Slider 
                id: 1,
                topLabel: 'Commercial',
                bottomLabel: 'Non-Commercial',
                step: "5",
                value: "0",
                min: "0",
                max: "100",
                weight: 1 
              />
            </div>
            <div>
              <Slider 
                id: 2,
                topLabel: 'Supplants',
                bottomLabel: 'Adds To',
                step: "5",
                value: "0",
                min: "0",
                max: "100",
                weight: 1
              />
            </div>
          </dd>
        </div>

        <div className="px-4 py-5 sm:p-6">
          <dt className="text-base font-normal text-gray-900">Factor 2</dt>
          <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div>
              <Slider 
                id: 3,
                topLabel: 'Extremely',
                bottomLabel: 'Not So Much',
                step: "5",
                value: "0",
                min: "0",
                max: "100",
                weight: 1 
              />             
            </div>
          </dd>
        </div>

        <div className="px-4 py-5 sm:p-6">
          <dt className="text-base font-normal text-gray-900">Factor 3</dt>
          <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div>
            <Slider 
              id: 4,
              topLabel: 'All',
              bottomLabel: 'Very Little',
              step: "5",
              value: "0",
              min: "0",
              max: "100",
              weight: 1
            />
        <Slider 
        id: 5,
        topLabel: 'Substantial',
        bottomLabel: 'Incidental',
        step: "5",
        value: "0",
        min: "0",
        max: "100",
        weight: 1    
        />
        <Slider 
        id: 6,
        topLabel: 'All',
        bottomLabel: 'Very Little',
        step: "5",
        value: "0",
        min: "0",
        max: "100",
        weight: 1
        />
            </div>
          </dd>
        </div>

        <div className="px-4 py-5 sm:p-6">
          <dt className="text-base font-normal text-gray-900">Factor 4</dt>
          <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div>
            <Slider 
            id: 4,
        topLabel: 'All',
        bottomLabel: 'Very Little',
        step: "5",
        value: "0",
        min: "0",
        max: "100",
        weight: 1
        <Slider 
        id: 5,
        topLabel: 'Substantial',
        bottomLabel: 'Incidental',
        step: "5",
        value: "0",
        min: "0",
        max: "100",
        weight: 1
        <Slider 
        id: 6,
        topLabel: 'All',
        bottomLabel: 'Very Little',
        step: "5",
        value: "0",
        min: "0",
        max: "100",
        weight: 1
        />
            </div>
          </dd>
        </div>

        <div className="px-4 py-5 sm:p-6">
          <dt className="text-base font-normal text-gray-900">Factor 5</dt>
          <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div>
            id: 6,
        topLabel: 'All',
        bottomLabel: 'Very Little',
        step: "5",
        value: "0",
        min: "0",
        max: "100",
        weight: 1,             
            </div>
          </dd>
        </div>    

      </dl>
    </div>
  )
}
