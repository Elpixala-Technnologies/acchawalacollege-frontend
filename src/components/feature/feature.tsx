import Tag from "../tag/tags";

type Tag = {
  name: string;
};
type Props = {
  title: string;
  tags: Tag[];
};
export default function Feature({ title, tags }: Props) {
  return (
    <>
      <div className="bg-primary-light my-4 p-4 shadow-lg">
        <h5 className="text-primary text-[30px] font-semibold mb-4">{title}</h5>
        <div className="flex gap-4 flex-wrap">
          {tags.map((tag) => {
            return (
              <div
                key={tag.name}
                className={`text-base shadow-sm text-primary px-2 py-1 bg-white rounded-full`}
              >
                {/* {icon ? <div className="mr-2">{icon}</div> : <></>} */}
                <div className={`flex-1`}>{tag.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
