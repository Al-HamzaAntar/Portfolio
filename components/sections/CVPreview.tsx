'use client';

import { useState } from 'react';
import { CVData } from '@/types/cv';
import { Card } from '@/components/ui/card';

interface CVPreviewProps {
  data: CVData;
}

export function CVPreview({ data }: CVPreviewProps) {
  return (
    <Card className="w-full max-w-4xl p-8 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-xl text-muted-foreground">{data.title}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <h2 className="font-semibold mb-2">Contact</h2>
          <p>{data.contact.email}</p>
          <p>{data.contact.phone}</p>
          <p>{data.contact.location}</p>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Links</h2>
          <p>{data.contact.linkedin}</p>
          <p>{data.contact.github}</p>
        </div>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Summary</h2>
        <p className="text-sm">{data.summary}</p>
      </div>

      <div>
        <h2 className="font-semibold mb-4">Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-medium">{exp.position}</h3>
            <p className="text-sm text-muted-foreground">{exp.company} | {exp.period}</p>
            <ul className="list-disc list-inside text-sm mt-2">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h2 className="font-semibold mb-4">Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-medium">{edu.institution}</h3>
            <p className="text-sm">{edu.degree}</p>
            <p className="text-sm text-muted-foreground">{edu.period}</p>
            <p className="text-sm">{edu.description}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="font-semibold mb-4">Skills</h2>
        {data.skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-medium">{skill.category}</h3>
            <p className="text-sm">{skill.items.join(', ')}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}