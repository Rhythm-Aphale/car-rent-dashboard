import { NextRequest } from 'next/server';

export const getSessionToken = (request: NextRequest): string | undefined => {
  return request.cookies.get('session')?.value;
};

export const createSessionResponse = (token: string) => {
  const response = new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
  
  response.headers.set('Set-Cookie', `session=${token}; HttpOnly; Path=/; Max-Age=86400`);
  return response;
};

export const clearSessionResponse = () => {
  const response = new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
  
  response.headers.set('Set-Cookie', 'session=; HttpOnly; Path=/; Max-Age=0');
  return response;
};