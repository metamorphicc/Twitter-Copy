"use server"

export async function name(params) {
    const content = params.get('mainpageInput')
    console.log(content);
}

export default name