import { notFound } from 'next/navigation'
import { services, getServiceBySlug } from '@/lib/services-data'
import type { Metadata } from 'next'
import ServicePageClient from './service-page-client'

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: `${service.title} | Vəkil Kərimbəyli Abbas Yaqub oğlu`,
    description: service.heroDesc,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 4)

  return <ServicePageClient service={service} otherServices={otherServices} />
}
