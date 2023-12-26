export default function execute(code: string) {
  try {
    return eval(code);
  } catch (error) {
    return error;
  }
}
