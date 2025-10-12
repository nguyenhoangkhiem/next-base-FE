'use client';
import { useState } from 'react';

interface FormData {
  name: string;
  network: string;
  type: string;
  status: string;
  link: string;
  notes: string;
}

export default function Admin() {
  const [form, setForm] = useState<FormData>({
    name: '',
    network: '',
    type: '',
    status: '',
    link: '',
    notes: ''
  });
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = window.prompt('Enter admin token') || '';
    const res = await fetch('/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-token': token
      },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      setMsg('Saved!');
      setForm({ name: '', network: '', type: '', status: '', link: '', notes: '' });
    } else {
      setMsg('Error: ' + (await res.text()));
    }
  };

  return (
    <main className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        {Object.keys(form).map(key => (
          <input
            key={key}
            type="text"
            placeholder={key}
            value={form[key as keyof FormData]}
            onChange={e => setForm({ ...form, [key]: e.target.value })}
            className="w-full p-2 border rounded-md"
          />
        ))}
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Save
        </button>
      </form>
      {msg && <p className="mt-3">{msg}</p>}
    </main>
  );
}
