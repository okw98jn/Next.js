import type { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { BACKEND_URL } from '@/const/CommonConst';

export const GET = async (res: NextApiResponse) => {
    try {
        const response = await fetch(BACKEND_URL + 'admin/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
}