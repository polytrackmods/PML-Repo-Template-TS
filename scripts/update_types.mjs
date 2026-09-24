import fs from 'node:fs/promises';

const polytypes_url = "https://git.polymodloader.com/polytrackmods/PolyModLoader/raw/branch/0.6.3/PolyTypes.d.ts"

async function update_polytypes() {
    const polytypes_raw = await fetch(polytypes_url)
    const polytypes = await polytypes_raw.text()
    if (!polytypes_raw.ok) {
        console.error('Failed to fetch PolyTypes type definition')
        return
    }
    await fs.writeFile('PolyTypes.d.ts', polytypes)
    console.log('Wrote PolyTypes type definition to PolyTypes.d.ts')
}

await update_polytypes()