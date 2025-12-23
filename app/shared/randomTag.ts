export default function generateTag({
  nickname,
  email,
  length = 6,
}: {
  nickname: string;
  email: string;
  length: number;
}) {
  const base = nickname || email.split("@")[0];
  const result: string[] = [];
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789_-.";

for (let j = 0; j < 3; j++) {
  let suffix = "";                      

  for (let i = 0; i < length; i++) {
    const idx = Math.floor(Math.random() * chars.length);
    suffix += chars[idx];
  }

  result.push(suffix);         
}
    return result;

  }


