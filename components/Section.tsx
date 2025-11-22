import React from 'react'

interface SectionProps {
    id?: string
    children: React.ReactNode
    className?: string
}

export default function Section({ id, children, className = '' }: SectionProps) {
    return (
        <section id={id} className={`section ${className}`}>
            {children}
        </section>
    )
}
