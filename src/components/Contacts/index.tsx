import { ContactsType } from "@/types";

type ContactsProps = {
  contacts: ContactsType;
};

export default function Contacts({ contacts }: ContactsProps) {

  const linkTypeMap: Record<string, string> = {
    tel: "tel",
    mailto: "mailto",
    url: ""
  };

  return (
    <section className="break-inside-avoid">
      <h2 className="my-8 text-3xl uppercase border-b border-zinc-800">Contacts</h2>
      {contacts.map((contact) => {
        const link = contact.type !== "url" ? linkTypeMap[contact.type] + ":" + contact.value : contact.value;
        return (
          <div className="my-5" key={contact.label}>
            <h3 className="font-semibold pb-1">{contact.label}</h3>
            <a className="break-words text-blue-800 underline" href={link} target="_blank">{contact.value}</a>
          </div>
        );
      })}
    </section>
  );
}
