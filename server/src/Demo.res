type status = Vacations(int) | Sabbatical(int) | Sick | Present
type reportCard = {passing: bool, gpa: float}
type student = {name: string, status: status, reportCard: reportCard}
type person =
  | Teacher({name: string, age: int})
  | Student(student)

let main = () => {
  let opt = Some(false)
  let optionBoolToBool = opt => {
    switch opt {
    | Some(trueOrFalse) => trueOrFalse
    | None => false
    }
  }
}

main()
